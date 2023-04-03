import Contact from './Contact'

const Persons = ({ peopleToShow }) => {
    return (
        <div>
            {peopleToShow.map((person) =>
                <Contact name={person.name} number={person.number} key={person.name} />
            )}
        </div>
    )
}

export default Persons