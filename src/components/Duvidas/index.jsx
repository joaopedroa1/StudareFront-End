import  { useState } from 'react'
import './style.css'

export const Duvidas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

const toggleItem = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

const accordionItems = [
  {
    title: '01. Para quem é a STUDARE ?',
    content: 'Studare é uma plataforma para estudantes que não sabem as fontes certas para estudar o seu devido curso.',
  },
  {
    title: '02. A plataforma necessita de pagamento?',
    content: 'Studare é uma plataforma totalmente gratuita com o foco em auxiliar o estudante e não vender cursos e afins.',
  },
  {
    title: '03. As aulas serão Ao Vivo ?',
    content: 'Na nossa plataforma não terão aulas nem Ao Vivo e nem Gravadas pois o foco é mostrar as fontes, os sites e os melhores professores do mercado para sua disciplina.',
  },
  {
    title: '04. Como sei que as informações são confiáveis ?',
    content: 'Temos professores qualificados nas respectivas áreas que direcionam os melhores estudos para o aprendizado mais dinâmico do aluno.'
  }
];

  return (
    <div className="accordion">
    {accordionItems.map((item, index) => (
      <div key={index}>
        <div className="accordion-header" onClick={() => toggleItem(index)}>
          {item.title}
        </div>
        {activeIndex === index && (
          <div className="accordion-body">
            {item.content}
          </div>
        )}
      </div>
    ))}
  </div>
);
}
