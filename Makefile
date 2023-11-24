dev:
	source .venv/bin/activate
	streamlit run app.py

install:
	mkdir -p ~/.streamlit/
	echo "API_PASSWORD=''" > ".streamlit/secrets.toml"
	python -m venv .venv
	source .venv/bin/activate
	pip install -r requirements.txt