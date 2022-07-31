export const state = () => ({
  uploaders: {
    found: 'found',
    lost: 'lost'
  },
  selectedUploader: 'catfinder',
});

export const actions = {};

export const mutations = {
  selectUploader(state, uploader) {
    state.selectUploader = uploader;
  },
};
