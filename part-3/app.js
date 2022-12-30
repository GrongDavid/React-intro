const App = () => (
    (
    <div>
        <Person
        name="David"
        age={22}
        hobbies={["Coding", "Tennis", "Competing"]}
      />
    </div>
    )
)

ReactDOM.render(<App />, document.getElementById('root'))