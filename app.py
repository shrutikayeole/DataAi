from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import google.generativeai as genai
import json

app = Flask(__name__)
CORS(app)

# Configure Google Generative AI API
genai.configure(api_key="AIzaSyDynzN9P8McsnNX_es9vip0O5DuqMDPHpI")

# Database connection details
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'chatbot_db'
}

# Load Gemini model response
def get_gemini_response(question, prompt):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content([prompt[0], question])
    return response.text

# Retrieve query from DB
def read_sql(sql):
    connection = pymysql.connect(**db_config)
    cursor = connection.cursor()
    sql_query = sql.replace('```sql', '').replace('```', '').strip()

    try:
        cursor.execute(sql_query)
        rows = cursor.fetchall()
        connection.commit()
        return rows, sql_query
    except pymysql.MySQLError as e:
        print(f"MySQL Error: {e}")
        return [], sql_query
    finally:
        connection.close()

# Get SQL schema
def get_sql_schema():
    connection = pymysql.connect(**db_config)
    cursor = connection.cursor()
    cursor.execute("SHOW TABLES;")
    tables = cursor.fetchall()
    
    schema = {"tables": {}}
    for table in tables:
        table_name = table[0]
        cursor.execute(f"DESCRIBE {table_name};")
        columns = cursor.fetchall()
        schema["tables"][table_name] = [column[0] for column in columns]
    
    connection.close()
    return schema

# Load SQL schema
sql_schema = get_sql_schema()
with open('sql_schema.json', 'w') as f:
    json.dump(sql_schema, f, indent=4)

# Define prompt
prompt = [f"""
You are an expert in converting English questions to SQL queries!
The SQL database has the following tables and columns: {json.dumps(sql_schema['tables'])}
\n\nFor example,\nExample 1 - How many entries of records are present?,
the SQL command will be something like this: SELECT COUNT(*) FROM TABLE_NAME;
\nExample 2 - Tell me all the students studying in A?,
the SQL command will be something like this: SELECT * FROM TABLE_NAME WHERE COLUMN_NAME="A",
Ensure your responses are detailed and provide valuable insights into the results but dont explain the sql query.
and use descriptive statements while answering.
"""]

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question')

    if not question:
        return jsonify({'error': 'Question is required'}), 400

    response = get_gemini_response(question, prompt)
    rows, sql_query = read_sql(response)

    # Store the conversation in the database
    connection = pymysql.connect(**db_config)
    cursor = connection.cursor()

    try:
        # You can generate a new conversation ID here if needed
        cursor.execute("INSERT INTO messages (user_message, bot_message) VALUES (%s, %s)", 
                       (question, response))
        connection.commit()
    except pymysql.MySQLError as e:
        print(f"MySQL Error: {e}")
    finally:
        connection.close()

    return jsonify({
        'sql_query': sql_query,
        'sql_response': response,
        'data': rows
    })

if __name__ == '__main__':
    app.run(debug=True)