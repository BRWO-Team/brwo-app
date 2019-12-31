import React from 'react';
import AddFormControl from './AddFormControl';

class AddFormModal extends React.Component {
  render() {
    return (
      <div className='add-form-modal'>
        <div class='m-1'>
          <button
            type='button'
            class='btn btn-primary'
            data-toggle='modal'
            data-target='#sign-up-modal'
          >
            List or Request
          </button>
          <div
            class='modal fade'
            id='sign-up-modal'
            tabindex='-1'
            role='dialog'
            aria-hidden='true'
          >
            <div class='modal-dialog' role='document'>
              <div class='modal-content'>
                <div class='modal-body'>
                  <button
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <img
                      class='icon bg-dark'
                      src='data:image/png;base64,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'
                      alt='cross interface icon'
                      data-inject-svg
                    />
                  </button>
                  <div class='m-xl-4 m-3'>
                    <div class='text-center mb-4'>
                      <h4 class='h3 mb-1'>List or Request</h4>
                    </div>
                    <form>
                      <AddFormControl />
                      <div class='form-group'>
                        <button class='btn-block btn btn-primary' type='submit'>
                          Submit
                        </button>
                      </div>
                      <div class='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          class='custom-control-input'
                          id='signup-agree'
                        />
                        <label
                          class='custom-control-label text-small text-muted'
                          for='signup-agree'
                        >
                          I agree to the <a href='#'>Terms &amp; Conditions</a>
                        </label>
                      </div>
                      <hr />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFormModal;
