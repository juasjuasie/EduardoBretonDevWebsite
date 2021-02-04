import React,{useState} from 'react';
import {Link } from 'react-router-dom'
import {useLanguage} from '../utils/LanguageContextProvider'
import axios from 'axios'
function QuestionScreen() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      })
    const [lang, setLang] = useLanguage();
    const [content, setContent] = useState({
        content: '',
      }) 

    const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          })
          setContent({
            content: '',
          })
        } else {
          setStatus({
            info: { error: true, msg: msg },
          })
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
        axios({
          method: 'POST',
          url: 'https://formspree.io/xrgodazq',
          data: content,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you, your message has been submitted.'
            )
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error)
          })
      }
    const handleContentChange = (e) => {
        e.persist()
        setContent((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
        }))
        setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
        })
    }
    return <div className="question-title-section">
        <div className="fade-in text-centered">
            {lang.question}
        </div>
        <div className="question-text fade-in text-centered">
            {lang.questionMain}
        </div> 
        <form onSubmit={handleSubmit} method='POST'>
            <textarea value={content.content} onChange={handleContentChange} required className="question-text-area" id="content" name="_replyto"></textarea>
            <input type="submit" className="send-btn button"  disabled={status.submitting}></input>
            <br/>
            <div class="g-recaptcha g-recaptcha-response" data-sitekey="6LcV_UkaAAAAABrU4ySkYCeu31jgWB9cPdWfcrB7"></div>
        </form>
        {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        <Link to="/" className="button fixed-bottom">
            {lang.goBack}
        </Link>
    </div>
}

export default QuestionScreen;