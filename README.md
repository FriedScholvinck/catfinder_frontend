# CatFinder
Frontend for CatFinder project.

## Getting Started

#### Prerequisites
- Python 3.7+, venv, pip

To setup and run the app locally, clone this repository run the following commands.
```
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

```
mkdir -p ~/.streamlit/
echo "API_KEY=''" > ".streamlit/secrets.toml"
echo "API_URL=''" >> ".streamlit/secrets.toml"
```

Insert the right API key and URL in the secrets.toml file.

```
streamlit run app.py
```

## Development
Push your local branch to remote and create a pull request to merge into main. The app will be automatically deployed to Streamlit Cloud once the code is merged.

## Deployment
This project is deployed on Streamlit Cloud.