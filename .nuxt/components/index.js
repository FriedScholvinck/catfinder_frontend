export const BackgroundEffects = () => import('../../components/BackgroundEffects.vue' /* webpackChunkName: "components/background-effects" */).then(c => wrapFunctional(c.default || c))
export const ImageLog = () => import('../../components/ImageLog.vue' /* webpackChunkName: "components/image-log" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const Uploader = () => import('../../components/Uploader.vue' /* webpackChunkName: "components/uploader" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
