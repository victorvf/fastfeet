import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import MainButton from '~/components/MainButton';

import { Container, Content, FirstForm, MiddleForm, LastForm } from './styles';

const schema = Yup.object().shape({
    name: Yup.string('Nome inválido').required('Nome é obrigatório'),
    cep: Yup.string('CEP inválido').required('CEP é obrigatório'),
    state: Yup.string('Estado inválido').required('Estado é obrigatório'),
    city: Yup.string('Cidade inválida').required('Cidade é obrigatória'),
    street: Yup.string('Rua inválida').required('Rua é obrigatória'),
    number: Yup.number('Número inválido').required('Número é obrigatório'),
    complement: Yup.string(),
});

export default function RegisterRecipient() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <Container>
            <div>
                <h1>Cadastro de destinatário</h1>
                <div>
                    <MainButton back onClick={() => history.push('/recipient')}>
                        <MdKeyboardArrowLeft size={20} color="#fff" />
                        Voltar
                    </MainButton>
                    <MainButton type="submit" form="form-recipient">
                        <MdDone size={20} color="#fff" />
                        Salvar
                    </MainButton>
                </div>
            </div>

            <Content>
                <Form
                    schema={schema}
                    onSubmit={() => handleSubmit()}
                    id="form-recipient"
                >
                    <FirstForm>
                        <strong>Nome</strong>
                        <Input name="name" placeholder="Nome do destinatário" />
                    </FirstForm>
                    <MiddleForm>
                        <div>
                            <strong>Rua</strong>
                            <Input
                                name="street"
                                placeholder="Ex. Rua de baixo"
                            />
                        </div>

                        <div>
                            <strong>Número</strong>
                            <Input name="number" placeholder="0000" />
                        </div>

                        <div>
                            <strong>Complemento</strong>
                            <Input name="complement" />
                        </div>
                    </MiddleForm>
                    <LastForm>
                        <div>
                            <strong>Cidade</strong>
                            <Input name="city" placeholder="Nome da cidade" />
                        </div>

                        <div>
                            <strong>Estado</strong>
                            <Input name="state" placeholder="Nome do estado" />
                        </div>

                        <div>
                            <strong>CEP</strong>
                            <Input name="cep" placeholder="00.000-000" />
                        </div>
                    </LastForm>
                </Form>
            </Content>
        </Container>
    );
}
