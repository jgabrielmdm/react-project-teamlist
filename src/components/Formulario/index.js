import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

function Formulario(){

    const times = [
        'Programação',
        'Front-end',
        'Data science',
        'Devops',
        'UX e design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form foi submetido')
    }

    return(
        <section className='formulario'>
            <form onSubmit = {aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio ={true} label="Nome" placeholder="Digite Seu Nome"/>     
                <CampoTexto obrigatorio ={true} label="Cargo" placeholder="Digite Seu Cargo"/>     
                <CampoTexto label="Imagem" placeholder="Insira aqui sua Imagem"/>
                <ListaSuspensa label="Times" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
        
    )
}

export default Formulario