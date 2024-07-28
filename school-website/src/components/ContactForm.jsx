import styled from 'styled-components';
import Heading from './Heading';
import Section from './Section';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
const ContactForm = () => {
    return (
        <Section crosses id="contactus">
      <div className='ContactForm'>
        <div className='container'>
        <Heading title="Contact Form"/>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6 mb-3'>
                      <input
                        type='text'
                        name='name'
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                    </div>
                    <div className='col-6 mb-3'>
                      <input
                        type='email'
                        name='email'
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow mb-3'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow mb-3'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                    </div>
                  </div>
                  <StyledButton>Submit</StyledButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Section>
    );
  };
  
  export default ContactForm;
  