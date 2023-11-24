from datetime import datetime

import requests
import streamlit as st

st.set_page_config(
    page_title="CatFinder",
    page_icon="assets/favicon.png",
    menu_items={},
)

# hide hamburger menu on top right of page
hide_menu_style = """
<style>
#MainMenu {visibility: hidden;}
</style>
"""
st.markdown(hide_menu_style, unsafe_allow_html=True)

col1, col2, col3, col4, col5 = st.columns(5)
with col3:
    st.image("assets/xomnia_logo.png")
st.title("CatFinder")
# col1, col2, col3, col4, col5 = st.columns(5)
# with col3:
#     st.markdown("<style>img{border-radius: 10%;}</style>", unsafe_allow_html=True)
#     st.image(images, width=200, use_column_width=True)


files = st.file_uploader("Upload one or multiple images of the cat", type=["jpg", "png", "jpeg"], key="upload_cat_image", accept_multiple_files=True)


cat = st.selectbox(
    'Compare to lost or found cats?',
    ('I lost a cat', 'I found a cat'))

#text = st.text_input("Enter a description of the cat", value="", max_chars=1000, key="cat_description")

date = st.date_input("When did you lose/find the cat?", value=None, min_value=datetime(2022,1,1), max_value=datetime.today(), key="date")
url = 'localhost:5000/predict'

class TestResponse:
    def __init__(self, status_code, content):
        self.status_code = status_code
        self.content = content

if st.button("Find similar cats", key="find_similar_cats"):
    if files is not None:
        # call CatFinder API
        try:
            # r = requests.request("post", url, headers=headers, files=files)
            
            # create mock response 
            r = TestResponse(200, "This is a mock response")

            if r.status_code == 200:
                st.success(r.content)

        except Exception as e:
            st.error("API not available.")
            st.error(e)
            st.stop()
        

        st.success("Found similar cats")
        st.write("Click on the images to go to the original ad.")

        # for index in indexes:
        #     html = f'''
        #     <center>
        #         <a href='https://www.amivedi.nl/detail/?meldingid={entities_cur.iloc[index].melding_nummer}'>
        #             <img src='{entities_cur.iloc[index].image_path_0}' width='200' ' style='border-radius: 10%;'>
        #         </a>
        #     </center>'''
        #     st.markdown(html, unsafe_allow_html=True)

        #     # small empty line
        #     st.markdown("<br>", unsafe_allow_html=True)
    else:
        st.write("Please upload an image of a cat.")
