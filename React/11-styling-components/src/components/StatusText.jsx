export default () => {
   const status = true
   return (
      <h2 style={{
         color: status ? "#00ff9f" : "#ff0000"
      }}>
         Current Status: {status ? 'ON' : 'OFF'}
      </h2>
   )
}