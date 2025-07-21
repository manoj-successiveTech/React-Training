const { render, screen } = require("@testing-library/react")
const { default: Weather } = require("./Weather")

describe("Weather Component",()=>{
    beforeEach(()=>{
        render(<Weather temperature={9}/>)
    })
    it("Renders Case Perfectly",()=>{
        expect(screen.getByText(/It's Cold today!/i)).toBeInTheDocument();
    })
})