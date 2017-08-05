export default (value) => {
  const d = new Date(value)
  return d.toLocaleDateString([], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
