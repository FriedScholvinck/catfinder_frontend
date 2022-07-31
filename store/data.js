export const state = () => ({
  uploaders: {
    lost: 'lost',
    found: 'found'
  },
  selectedUploader: 'lost',
});

export const actions = {};

export const mutations = {
  selectUploader(state, uploader) {
    state.selectUploader = uploader;
  },
};
