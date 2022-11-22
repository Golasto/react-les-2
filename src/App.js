import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';

function App() {
    const [countAardbei, setCountAardbei] = useState(0)
    const [countBananen, setCountBananen] = useState(0)
    const [countAppel, setCountAppel] = useState(0)
    const [countKiwi, setCountKiwi] = useState(0)

    function addOne(type){
        switch (type) {
            case "Aardbei":
                setCountAardbei(countAardbei => countAardbei + 1)
                break;
            case "Banaan":
                setCountBananen(countBananen => countBananen + 1)
                break;
            case "Appel":
                setCountAppel(countAppel => countAppel + 1)
                break;
            case "Kiwi":
                setCountKiwi(countKiwi => countKiwi + 1)
                break;
        }



    }

    function subtractOne(type){
        switch (type) {
            case "Aardbei":
                setCountAardbei(countAardbei => countAardbei - 1)
                break;
            case "Banaan":
                setCountBananen(countBananen => countBananen - 1)
                break;
            case "Appel":
                setCountAppel(countAppel => countAppel - 1)
                break;
            case "Kiwi":
                setCountKiwi(countKiwi => countKiwi - 1)
                break;
        }
    }

    function resetAll() {
        setCountAardbei(0)
        setCountAppel(0)
        setCountBananen(0)
        setCountKiwi(0)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <label>
                <div>
                    <p>Er zijn { countBananen } Bananen!</p>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => setCountBananen(countBananen +1)}
                    >
                        1 +
                    </Button>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => subtractOne("Banaan") }
                        toBeDisabled={ countBananen < 1}
                    >
                        1 -
                    </Button>
                </div>
                <div>
                    <p>Er zijn { countAardbei } Aardbeien!</p>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => addOne("Aardbei") }
                    >
                        1 +
                    </Button>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => subtractOne("Aardbei") }
                        toBeDisabled={ countAardbei < 1}
                    >
                        1 -
                    </Button>
                </div>
                <div>
                    <p>Er zijn { countAppel } Appels!</p>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => addOne("Appel") }
                    >
                        1 +
                    </Button>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => subtractOne("Appel") }
                        toBeDisabled={ countAppel < 1}
                    >
                        1 -
                    </Button>
                </div>
                <div>
                    <p>Er zijn { countKiwi } Kiwi's!</p>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => addOne("Kiwi") }
                    >
                        1 +
                    </Button>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => subtractOne("Kiwi") }
                        toBeDisabled={ countKiwi < 1}
                    >
                        1 -
                    </Button>
                </div>
                <div>
                    <Button
                        type="button"
                        className="btn"
                        clickHandler={() => resetAll()}
                        toBeDisabled={ countAardbei < 1 && countBananen < 1 && countAppel < 1 && countKiwi < 1}
                    >
                        Reset
                    </Button>
                </div>
            </label>

            <div>
                <form>
                    <label>Voornaam:</label><input type="text" id="voornaam" placeholder="voornaam"></input><br />
                    <label>Achternaam:</label><input type="text" id="achternaam" placeholder="achternaam"></input><br />
                    <label>Leeftijd:</label><input type="number" id="leeftijd" placeholder="0"></input><br />
                    <label>Postcode:</label><input type="text" id="postcode" placeholder="1234AA"></input><br />
                    <label>Bezorgfrequentie</label><select name="bezorging" id="bezorging">
                    <option value="iedere week">Iedere week</option>
                    <option value="om de week">Om de week</option>
                    <option value="iedere maand">Iedere maand</option>
                </select><br />
                    <input type="radio" name="tijdvak" value="overdag"></input><label>Overdag</label><br />
                    <input type="radio" name="tijdvak" value="'s avonds"></input><label>'S avonds</label><br />
                    <label>Opmerkingen</label><textarea placeholder="opmerking"></textarea><br />
                    <label>Akkoord met de voorwaarden</label><input type="checkbox" required></input><br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
}

export default App;