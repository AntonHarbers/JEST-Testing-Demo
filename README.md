# JEST Testing Demo - The Odin Project

![Repo Image](/repoImage.png)

## DIY

If you would like to clone this repo and run the tests yourself or tweak any of the code, feel free to do so. The tests can be run with the following cmd command (must have npm, node and jest installed):

CMD:

```
    npm run test
```

## Folder Structure

```
    /.git                   -> This git repository
    /coverage               -> Util folder for jest
    /node_modules           -> Util folder for dependencies
    /src
        test_practice.js        -> Contains the code that is being tested
        test_practice.test.js   -> Contains the JEST unit tests
    .gitignore              -> Git Ignore file for this repository
    babel.config.js         -> Babel config file
    package-lock.json
    package.json
    README.md               -> This readme file
    repoImage.png           -> The image at the beginning of this readme file
```

## Key Concepts

### Babel and Jest

In this project, I've used Babel in conjunction with Jest to handle ES6 imports. Babel is a versatile JavaScript compiler that lets us use modern JavaScript features in environments that don’t support them natively. This setup is particularly helpful for Jest, enabling us to write tests using the latest JavaScript syntax.

JS:

```
    module.exports = {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current'
                    },
                },
            ],
        ],
    };
```

This Babel configuration ensures that the code uses the current Node.js version's features, optimizing for our development environment.

### Tests in Programming

Testing is a fundamental part of software development. It ensures that our code behaves as expected, helping identify bugs early. Writing tests increases the reliability and maintainability of our code, contributing to more robust applications.

### Unit Tests with JEST

In this project, I focused on unit testing using Jest, a friendly and intuitive JavaScript testing framework. Unit tests are essential for verifying the functionality of individual code units, like functions, in isolation.

JS:

```
    test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    });
```

Here, I'm testing the capitalize function to ensure it correctly capitalizes the first letter of a string (In this case 'hello').

### Benefits of Testing in Web Development

Testing is vital in web development. It guarantees our applications work properly across various environments and browsers, assists in confident code refactoring, and leads to higher quality code and a better user experience.

## Final Notes

Through this project, I've highlighted the value of unit testing in JavaScript with Jest. Writing tests for each function against different inputs and scenarios has reinforced the importance of thorough testing for robust, error-free code. Going forward, I plan to delve into more complex testing patterns, explore test-driven development (TDD), and integrate continuous integration (CI) for automated testing processes. This project has been a crucial step in understanding the significance of testing in creating reliable and maintainable web applications.
