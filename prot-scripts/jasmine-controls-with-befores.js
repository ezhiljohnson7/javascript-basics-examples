describe('This is Gmail Testing', () => {

    beforeAll(() => {

        console.log('Login to the application');
    });

    it('I\'m Logging in and checking if I\'m logged in successfully', () => {

        console.log('Assert if Logged in successfully');
    });

    it('and this is test-2', () => {

        console.log('Assert if Create Mail option is enabled');
    });

    it('and this is test-3', () => {

        console.log('Assert if Inbox option is enabled');
    });

    describe('Testing Create message feature', () => {

        beforeEach(() => {

            console.log('Select the CreateMail option');
        });

        it('checking if the to option is available', () => {

            console.log('Assert if \'to\' option is available');
        });
    
        it('checking if the subject & message body option is available', () => {

            console.log('Assert if \'subject\' option is available');
        });
    
        it('checking if the send option is available', () => {

            console.log('Assert if \'send\' option is available');
        });
    });

    describe('Testing "inbox" feature', () => {

        beforeEach(() => {

            console.log('Select the Inbox option');
        });

        it('checking if the promotional is available', () => {

            console.log('Assert if \'promotional\' option is available');
        });
    
        it('checking if the starred option is available', () => {

            console.log('Assert if \'starred mails\' option is available');
        });
    
        it('checking if the spam option is available', () => {

            console.log('Assert if \'spam\' option is available');
        });
    });

    afterEach(() => {

        console.log('Go back to Homepage');
    });
});