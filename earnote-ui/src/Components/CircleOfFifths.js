import './CircleOfFifths.css';

const CircleOfFifths = () => {

    return (
        <div className='wheel'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-50 -50 100 100">
                <defs>
                  <circle id="c" className="breaks" r="40"/>
                </defs>
                <use xlinkHref='#c' className='a-note'/>
                <use xlinkHref="#c" className='d-note'/>
                <use xlinkHref="#c" className='g-note'/>
                <use xlinkHref="#c" className='c-note'/>
                <use xlinkHref="#c" className='f-note'/>
                <use xlinkHref="#c" className='bb-note'/>
                <use xlinkHref="#c" className='eb-note'/>
                <use xlinkHref="#c" className='ab-note'/>
                <use xlinkHref="#c" className='db-note'/>
                <use xlinkHref="#c" className='gb-note'/>
                <use xlinkHref="#c" className='b-note'/>
                <use xlinkHref="#c" className='e-note'/>

                <text className='text' y="-37">C</text>
                <text className='text' x="20" y="-31.6">G</text>
                <text className='text' x="34.6" y="-17">D</text>
                <text className='text' x="40" y="3">A</text>
                <text className='text' x="34.6" y="23">E</text>
                <text className='text' x="20" y="37.6">B</text>
                <text className='text' y="43">Gb</text>
                <text className='text' x="-20" y="37.6">Db</text>
                <text className='text' x="-34.6" y="23">Ab</text>
                <text className='text' x="-40" y="3">Eb</text>
                <text className='text' x="-34.6" y="-17">Bb</text>
                <text className='text' x="-20" y="-31.6">F</text>
            </svg>
        </div>
    );
};

export default CircleOfFifths;