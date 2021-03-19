import React, {Component} from 'react';


export default class SignUpForm extends Component {

  render() {
    
    return (
      <form
        className='registration-form'
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <h2>Create an account</h2>
          <label className='registration-form__user-name-label' htmlFor='registration-form__user-name'>
            Username
          </label>
          <input
            type='text'
            name='user_name'
            id='SignUpForm-form__user-name'
            value='user_name'
            onChange={e => this.usernameChanged(e.target.value)}
            placeholder='username'
            required
          />
          <label className='registration-form__email-label' htmlFor='registration-form__email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='SignUpForm__email'
            value='email'
            required
          />
          <label className='registration-form__password-label' htmlFor='registration-form__password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='SignUpForm-form__password'
            value='password'
            placeholder='password'
            required
          />
          <label className='SignUpForn-form__password-repeat-label' htmlFor='registration-form__password-repeat'>
            Confirm Password
          </label>
          <input
            type='password'
            name='passwordRepeat'
            id='SignUpForn-form__password-repeat'
            value='passwordRepeat'
            placeholder='password'
            required
          />
        </fieldset>
      </form>
    );
  }
};