import style from './index.module.less'
import logo from '../../assets/logo.png'
import { Button, Input, Form } from 'react-vant'
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../api'
import { useNavigate } from 'react-router'
export default function Register() {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const onFinish = async values => {
        //console.log(values)
        const res = await axios.post('/user/register', values);
        if (res.code == '1') {
            toast.success('注册成功')
            setTimeout(() => {
                //navigate(`/login?username=${values.username}&password=${values.password}`)
                navigate(`/login`,{state:{username:values.username,password:values.password}})
            }, 1000);
        } else {
            toast.error(res.msg)
        }
    }

    return (
        <div className={style.login}>
            <h1 className={style.title}>注册</h1>
            <div className={style['login-wrapper']}>
                <div className={style.avater}>
                    <img className={style['avater-img']} src={logo} alt="logo" />
                </div>
                <Form
                    form={form}
                    onFinish={onFinish}
                    footer={
                        <div style={{ margin: '16px 16px 0' }}>
                            <Button round nativeType='submit' type='info' block>
                                注册
                            </Button>
                        </div>
                    }
                >
                    <Form.Item
                        rules={[{ required: true, message: '请填写用户名' }]}
                        name='username'
                        label='用户名'
                        labelWidth={50}
                    >
                        <Input placeholder='请输入用户名' />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: '请填写密码' }]}
                        name='password'
                        label='密码'
                        labelWidth={50}
                    >
                        <Input placeholder='请输入密码' />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: '请填写昵称' }]}
                        name='nickname'
                        label='昵称'
                        labelWidth={50}
                    >
                        <Input placeholder='请输入昵称' />
                    </Form.Item>
                </Form>
            </div>


            <p className={style['login-tip']} onClick={() => {
                navigate('/login')
            }}>
                已注册，去登录
            </p>
        </div>
    )
}
