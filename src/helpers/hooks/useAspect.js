const { useMemo, useEffect } = require('react')

const useAspect = () => {
  const aspect = useMemo(() => ({ aspect: window.innerWidth / window.innerHeight }), [])

  useEffect(() => {
    const onResize = () => (aspect.aspect = window.innerWidth / window.innerHeight)

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [aspect])

  return aspect
}

export default useAspect
