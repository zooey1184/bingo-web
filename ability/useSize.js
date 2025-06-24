// import { ref, computed } from 'vue'
const { ref, computed, onMounted } = Vue
export default (props) => {
  const bp = {
		xxxl: [1920, 9999],
		xxl: [1600, 1920],
		xl: [1200, 1600],
		lg: [992, 1200],
		md: [768, 992],
		sm: [576, 768],
		xs: [0, 576],
	}
	const size = ref("xxl")
	const width = ref(1920)
	const target = computed(() => props?.target || document.body)

	const handleGetSize = () => {
		const _width = target.value.clientWidth
		width.value = _width
		const size = Object.keys(bp).find((key) => {
			const [min, max] = bp[key]
			return _width >= min && _width < max
		})
		return size
	}

	const handleInitSize = () => {
    window.ResizeObserver &&
			new ResizeObserver(() => {
				size.value = handleGetSize()
			}).observe(target.value)
  }


  onMounted(() => {
    handleInitSize()
  })
  return {
    size,
    width,
    handleInitSize
  }
}