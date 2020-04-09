import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import history from '~/services/history';

import MainButton from '~/components/MainButton';

import AvatarInput from '../AvatarInput';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Insira um e-mail válido'),
    avatar_id: Yup.number(),
});

export default function EditDeliveryman() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <Container>
            <div>
                <h1>Edição de entregadores</h1>
                <div>
                    <MainButton
                        back
                        onClick={() => history.push('/deliveryman')}
                    >
                        <MdKeyboardArrowLeft size={20} color="#fff" />
                        Voltar
                    </MainButton>
                    <MainButton type="submit" form="form-deliveryman">
                        <MdDone size={20} color="#fff" />
                        Salvar
                    </MainButton>
                </div>
            </div>

            <Content>
                <Form
                    schema={schema}
                    onSubmit={handleSubmit}
                    id="form-deliveryman"
                >
                    <AvatarInput name="avatar_id" />

                    <strong>Entregador</strong>
                    <Input name="name" placeholder="John Doe" />

                    <strong>E-mail</strong>
                    <Input name="email" placeholder="Samsung J5" />
                </Form>
            </Content>
        </Container>
    );
}