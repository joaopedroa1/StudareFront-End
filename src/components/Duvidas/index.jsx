import Accordion from 'react-bootstrap/Accordion';

export const Duvidas = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>01. Para quem é a Studare?</Accordion.Header>
        <Accordion.Body>
        Studare é uma plataforma para estudantes que não sabem as fontes certas para estudar o seu devido curso.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>02. Necessita de pagamento a Plataforma ?</Accordion.Header>
        <Accordion.Body>
        Studare é uma plataforma totalmente gratuita com o foco em auxiliar o estudante e não vender cursos e afins.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey = "2">
        <Accordion.Header>
        03. As aulas serão Ao Vivo ou Gravadas?
        </Accordion.Header>
        <Accordion.Body>
        Na nossa plataforma não terão aulas nem Ao Vivo e nem Gravadas pois o foco é mostrar as fontes, os sites e os melhores professores do mercado para sua disciplina.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey = "3">
        <Accordion.Header>
        04. Como sei que as informações são confiáveis ?
        </Accordion.Header>
        <Accordion.Body>
        Temos professores qualificados nas respectivas áreas que direcionam os melhores estudos para o aprendizado mais dinâmico do aluno.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
