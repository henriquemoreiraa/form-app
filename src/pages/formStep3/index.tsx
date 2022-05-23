import * as C from "./styles"
import { useNavigate, Link } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from "react"

export const FormStep3 = () => {
    useEffect(() => {
        if (state.name === '') {
            history('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }       
    }, [])

    const history = useNavigate()
    const { state, dispatch } = useForm()
    
    const handleNextStep = () => {
        if (state.name !== '' && state.game !== '' && state.nickName !== '') {
            history('/result')
        } else {
            alert('Answer the questions!')
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNickname,
            payload: e.target.value
        }) 
    }

    const handleGameNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGame,
            payload: e.target.value
        }) 
    }

    return (
        <Theme>
            <C.Container>
                <p>Step 3/3 </p>
                <h1>Ok {state.name}, tell me what game do you play the most and your nickname in it? </h1>
                
                <hr />

                <label>
                    Game name
                    <input 
                        type="text" 
                        autoFocus
                        onChange={handleGameNameChange}
                    />
                </label>

                <label>
                    Your nickname
                    <input 
                        type="text" 
                        onChange={handleNameChange}
                    />
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Result</button>
            </C.Container>
        </Theme>
        
    )
}