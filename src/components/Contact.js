import React from 'react';
import { TelephoneFill, EnvelopeFill, GeoAltFill, Instagram, Facebook, Twitter } from 'react-bootstrap-icons';
import {useState} from 'react';
import Googlemap from './Googlemap';



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return(
        <div>
            <div className = "container">
                <div className='row my-5'>
                    <div className='col text-center'>
                        <div className='row'>
                        <p>get in touch with us</p>
                        </div>
                        <div className='row'>
                        <h2>CONTACT</h2>
                    </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-6 my-4'>
                        <div className='row'>
                            <div className='col-1'>
                            <TelephoneFill color="grey" size={20} />
                            </div>
                            <div className='col-5'>
                                <div>
                                    <p>+49 23456789</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                            <EnvelopeFill color="grey" size={20} />
                            </div>
                            <div className='col-5'>
                                <div>
                                <p>useless@email.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-1'>
                            <GeoAltFill color="grey" size={20} />
                            </div>
                            <div className='col-5'>
                                <div>
                                <p>memeLand, Germany</p>
                                </div>
                            </div>
                        </div><br/>
                        <div className='row'>
                         
                            <div className='col-2'>
                                <Instagram color="grey" size={20} />
                            </div>
                            <div className='col-2'>
                                <Facebook color="grey" size={20} />
                            </div>
                            <div className='col-2'>
                                 <Twitter color="grey" size={20} />
                            </div>
                        </div>
                        <br/>
                            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                        
                    </div>
                    <div className='col-6'>
                    <form>
                    <h4>Write to us</h4><br/>
                    <div className='row'>
                    <input type="text" placeholder="Name" value={name} required onChange={e => setName(e.target.value)} />
                    </div><br/>
                    <div className='row'>
                    <input type="email" placeholder="Email" value={email} required  onChange={e => setEmail(e.target.value)} />
                    </div><br/>
                    <div className='row'>
                    <textarea placeholder="Message" value={message} required  onChange={e => setMessage(e.target.value)}></textarea>
                    </div><br/>
                    <div className='row'>
                    <button onClick={submit}>SEND</button>
                    </div><br/>
                    </form>
                    </div>
                </div>
            </div>
            <div className='container'>
            <div className='my-5 text-center'>Find us on maps</div>
                <Googlemap />
            </div>
            
        </div>
    )
}
export default Contact;