import {useState} from 'react';
import * as React from 'react';
import {Link } from 'react-router-dom'
import {useLanguage} from '../utils/LanguageContextProvider'
import axios from 'axios'
function QuestionScreen() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      })
    const [lang, ] = useLanguage();
    const [content, setContent] = useState({
        content: '',
        email: '',
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
            email: '',
          })
        } else {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: true, msg: msg },
          })
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(content.content && content.email.length > 0)
        {
          setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
          axios({
            method: "POST",
            url: 'https://formspree.io/f/xrgodazq',
            data: content,
          })
            .then((response) => {
              handleServerResponse(
                true,
                lang.msgSendOk
              )
            })
            .catch((error) => {
              handleServerResponse(false, error.response.data.error)
            })
        }
        else {
          handleServerResponse(false, 'One of the input fields are empty')
        }
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

    const handleEmailChange = (e) => {
      e.persist()
      setContent((prev) => ({
      ...prev,
      email: e.target.value,
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
        <form onSubmit={handleSubmit} className="form">
            <input type="email" value={content.email} className="email" placeholder={lang.email} onChange={handleEmailChange}></input>
            <textarea value={content.content} onChange={handleContentChange} maxLength={6000} required className="question-text-area" id="content" name="_replyto"></textarea>
            <input type="submit" className="send-btn button"  disabled={status.submitting}></input>
        </form>
        {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        <Link to="/">
        <p className="button fixed-bottom">
            {lang.goBack}
        </p>
        </Link>
    </div>
}

export default QuestionScreen;
