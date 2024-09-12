import './style.css'
import PropTypes from 'prop-types';

export const AvaliacaoAluno = ({imagemAlunoAvAliacao, nomeAlunoAvaliacao, textoAlunoAvaliacao, avaliacaoPositiva}) => {
    return(
        <>
        <div className="fundoAvaliacaoAluno">
            <img className='imgAlunoAvaliacao' src={imagemAlunoAvAliacao} alt="" />
            <p className="textoAvaliacaoAluno leagueSpartan">{textoAlunoAvaliacao}</p>
            <h1 className="nomeAvaliacaoAluno leagueSpartan">{nomeAlunoAvaliacao}</h1>
            <p className="avaliacaoBoa leagueSpartan">{avaliacaoPositiva}</p>
        </div> 

        </>
    )
}

AvaliacaoAluno.propTypes = {
    imagemAlunoAvAliacao : PropTypes.any,
    nomeAlunoAvaliacao: PropTypes.any,
    textoAlunoAvaliacao: PropTypes.any,
    avaliacaoPositiva: PropTypes.any
}