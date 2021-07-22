import React from "react";

function FormComponent(props) {
  const { handleChange } = props;
  const { firstName, lastName, age, gender, location, dietaryRestriction } =
    props.data;

  return (
    <main>
      <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="First Name"
        />

        <br />

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />

        <br />

        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Age"
        />

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />

        <select value={location} name="location" onChange={handleChange}>
          <option value="">-- Please Choose a Location --</option>
          <option value="san francisco">San Francisco</option>
          <option value="new york">New York</option>
          <option value="tokyo">Tokyo</option>
          <option value="las vegas">Las Vegas</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={dietaryRestriction.isVegan}
            onChange={handleChange}
          />
          Vegan?
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={dietaryRestriction.isKosher}
            onChange={handleChange}
          />
          Kosher?
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={dietaryRestriction.isLactoseFree}
            onChange={handleChange}
          />
          Lactose Free?
        </label>

        <br />

        <button>Submit</button>
      </form>

      <hr />

      <h2>Entered information:</h2>
      <p>
        Your name: {firstName} {lastName}
      </p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {location}</p>
      <p>
        Your dietary restrictions:
        {dietaryRestriction.isVegan ? "Vegan" : null}{" "}
        {dietaryRestriction.isKosher ? "Kosher" : null}{" "}
        {dietaryRestriction.isLactoseFree ? "Lactose Free" : null}
      </p>
    </main>
  );
}

export default FormComponent;
