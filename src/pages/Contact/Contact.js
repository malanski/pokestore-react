import '../../assets/scss/Contact.scss';


export const Contact = (props) => {
    return(
        <div className="contact">
            <h1>Contact</h1>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <textarea></textarea>
                    <button>Send</button>
                </form>
        </div>
    );
}