const FadeIn = ({ children, show, delay }) => {
  return <div
    className="transition-all"
    style={{ opacity: show ? 1 : 0, transitionDelay: delay }}
  >
    {children}
  </div>
}
export default FadeIn
