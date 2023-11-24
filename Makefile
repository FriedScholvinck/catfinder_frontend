dev:
	source .venv/bin/activate
	streamlit run app.py

install:
	mkdir -p ~/.streamlit/
	echo "API_KEY=''" > ".streamlit/secrets.toml"
	echo "API_URL=''" >> ".streamlit/secrets.toml"