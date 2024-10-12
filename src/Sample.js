import {useState} from "react";

const data = [{
    "FirstName": "Fred",
    "Surname": "Smith",
    "Age": 28,
    "Address": {
        "Street": "Hursley Park",
        "City": "Winchester",
        "Postcode": "SO21 2JN"
    },
    "Phone": [
        {
            "type": "home",
            "number": "0203 544 1234"
        },
        {
            "type": "office",
            "number": "01962 001234"
        },
        {
            "type": "office",
            "number": "01962 001235"
        },
        {
            "type": "mobile",
            "number": "077 7700 1234"
        }
    ],
    "Email": [
        {
            "type": "work",
            "address": ["sample@test.com","s@test.com"]
        },
        {
            "type": "home",
            "address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]
        }
    ],
    "Other": {
        "Over 18 ?": true,
        "Misc": null,
        "Alternative.Address": {
            "Street": "Brick Lane",
            "City": "London",
            "Postcode": "E1 6RF"
        }
    }
},
    {
        "FirstName": "Fred",
        "Surname": "Smith",
        "Age": 28,
        "Address": {
            "Street": "Hursley Park",
            "City": "Winchester",
            "Postcode": "SO21 2JN"
        },
        "Phone": [
            {
                "type": "home",
                "number": "0203 544 1234"
            },
            {
                "type": "office",
                "number": "01962 001234"
            },
            {
                "type": "office",
                "number": "01962 001235"
            },
            {
                "type": "mobile",
                "number": "077 7700 1234"
            }
        ],
        "Email": [
            {
                "type": "work",
                "address": ["sampletest@test.com","sample45@test.com"]
            },
            {
                "type": "home",
                "address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]
            }
        ],
        "Other": {
            "Over 18 ?": true,
            "Misc": null,
            "Alternative.Address": {
                "Street": "Brick Lane",
                "City": "London",
                "Postcode": "E1 6RF"
            }
        }
    },
    {
        "FirstName": "Fred",
        "Surname": "Smith",
        "Age": 28,
        "Address": {
            "Street": "Hursley Park",
            "City": "Winchester",
            "Postcode": "SO21 2JN"
        },
        "Phone": [
            {
                "type": "home",
                "number": "0203 544 1234"
            },
            {
                "type": "office",
                "number": "01962 001234"
            },
            {
                "type": "office",
                "number": "01962 001235"
            },
            {
                "type": "mobile",
                "number": "077 7700 1234"
            }
        ],
        "Email": [
            {
                "type": "work",
                "address": ["apple@test.com","beta@gamma.com"]
            },
            {
                "type": "home",
                "address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]
            }
        ],
        "Other": {
            "Over 18 ?": true,
            "Misc": null,
            "Alternative.Address": {
                "Street": "Brick Lane",
                "City": "London",
                "Postcode": "E1 6RF"
            }
        }
    },
    {
        "FirstName": "Fred",
        "Surname": "Smith",
        "Age": 28,
        "Address": {
            "Street": "Hursley Park",
            "City": "Winchester",
            "Postcode": "SO21 2JN"
        },
        "Phone": [
            {
                "type": "home",
                "number": "0203 544 1234"
            },
            {
                "type": "office",
                "number": "01962 001234"
            },
            {
                "type": "office",
                "number": "01962 001235"
            },
            {
                "type": "mobile",
                "number": "077 7700 1234"
            }
        ],
        "Email": [
            {
                "type": "work",
                "address": ["fred.smith@my-work.com", "fsmith@my-work.com"]
            },
            {
                "type": "home",
                "address": ["freddy@my-social.com", "frederic.smith@very-serious.com"]
            }
        ],
        "Other": {
            "Over 18 ?": true,
            "Misc": null,
            "Alternative.Address": {
                "Street": "Brick Lane",
                "City": "London",
                "Postcode": "E1 6RF"
            }
        }
    }
];
const Sample =() => {
    const [name, setName] = useState([]);
    const [results, setResults] = useState([]);

    const handleChange = e =>{
    setName(e.target.value)
}
const handleSubmit = () =>{
        console.log("in handle subit")
    const Results =data.filter((data) => {
    return data.Email.type ==='work' && data.Email.address.contains(name)
});
    setResults(Results)
}
    return (
        <div>
            <form>
                <label>
                    text <input type="text" value={name} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit" onSubmit={handleSubmit}/>
            </form>

            <span>
                text:{name}
            </span>
            {results ? <div>{results}</div>: null}
        </div>

    )
};
export default Sample;
