import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  const estiloBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8,backgroundColor :'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8 }
  const textoDoRotulo = 'Nome'
  const obterTextoDoBotao = () => "Enviar" // arrow function
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      {/* <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4 }}>Nome:</label> */}
      <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4 }}>{textoDoRotulo}:</label>
      <input type="text" id='nome' style={{ paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none' }}/>
      <button style={estiloBotao}>{obterTextoDoBotao()}</button>
      
       {/*<button style={{marginTop:12, paddingTop: 8, paddingBottom: 8,backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', 
      </div>borderRadius: 8}}>Enviar</button> olld */}
    
    </div>
  )
}      

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)