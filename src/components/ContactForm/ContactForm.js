import React from 'react';
import s from './ContactForm.module.css';
import shortid from 'shortid'

class ContactForm extends React.Component {
  
    state = {
  name: '',
  number: '',
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = e => {
       
      const { name, value } = e.currentTarget;
    /*   const value = e.target.value;
      const name = e.target.name; */
        this.setState({ [name]: value });
    }
    
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name)
    this.props.onSubmit(this.state)
  
  this.reset();
    }
 
    reset = () => {
    this.setState({name: '', number: ''})
}

  render() {
    return (
   <div className={s.forma} >
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
 Name <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
value={this.state.name}
                 onChange={this.handleChange}
                 id={this.nameInputId}
                        />
                    </label>


          <label htmlFor={this.numberInputId}>
 Number <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={this.state.number}
                 onChange={this.handleChange}
                 id={this.numberInputId}
/>
          </label>

            <button className={s.btnsubmit} type="submit" >Add contact</button>
        </form>

        
           </div>
 )
  }
}

export default ContactForm;
