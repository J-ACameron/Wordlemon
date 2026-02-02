# Design Document: Wordlemon

## Overview

Wordlemon is a browser-based Pokemon-themed Wordle game built with vanilla JavaScript, HTML, and CSS. The game fetches valid 5-letter Pokemon names from the PokeAPI, presents players with a guess interface, and provides real-time feedback on letter correctness. The entire game runs client-side with no backend or persistent storage, making it a lightweight, self-contained experience.

## Architecture

The application follows a modular architecture with clear separation of concerns:

- **Game Engine**: Core game logic (state management, win detection, feedback calculation)
- **API Layer**: Handles PokeAPI communication and Pokemon name filtering
- **UI Layer**: Renders game board, input, history, and modals
- **Event Handler**: Manages user interactions (input, submission, play again)

### Data Flow

1. Page loads → API Layer fetches Pokemon names → Game Engine selects random Pokemon
2. User types → Event Handler validates input → UI updates submit button state
3. User submits → Game Engine calculates feedback → UI renders guess with feedback
4. Game Engine detects win → UI displays success modal
5. User clicks play again → Game Engine resets → UI clears and restarts

## Components and Interfaces

### Game Engine

**Responsibilities**: Manage game state, validate guesses, calculate feedback, detect win condition

**Key Methods**:
- `initializeGame(pokemonList)`: Set up new game session with random Pokemon
- `submitGuess(guess)`: Validate and process a guess, return feedback
- `calculateFeedback(guess, target)`: Compare guess to target, return letter feedback
- `isWin()`: Check if current guess matches target
- `resetGame()`: Clear state for new game
- `isDuplicate(guess)`: Check if guess was already submitted

**State**:
- `targetPokemon`: Current target Pokemon name (lowercase)
- `guesses`: Array of submitted guesses with their feedback
- `gameWon`: Boolean flag for win state

### API Layer

**Responsibilities**: Fetch Pokemon data, filter by length, manage caching

**Key Methods**:
- `fetchPokemonNames()`: Fetch all Pokemon from PokeAPI
- `filterByLength(pokemonList, length)`: Filter Pokemon names to exact length, returning ONLY names with exactly the specified length
- `getRandomPokemon(pokemonList)`: Select random Pokemon from the filtered list

**Implementation Notes**:
- Use fetch API to call https://pokeapi.co/api/v2/pokemon?limit=10000
- Extract Pokemon names from response
- Filter for exactly 5-letter names only (no 4-letter, 6-letter, or other lengths)
- Cache results to avoid repeated API calls during session
- Ensure all Pokemon in the game are guaranteed to be exactly 5 letters

### UI Layer

**Responsibilities**: Render game board, input area, guess history, modals

**Key Elements**:
- Game title and instructions
- Target word display (5 blank tiles)
- Input field for guesses
- Submit button
- Guess history (rows of guesses with feedback)
- Guess counter
- Success modal with play again button

**CSS Classes for Feedback**:
- `.correct`: Green background for correct position letters
- `.wrong-position`: Yellow background for wrong position letters
- `.not-in-word`: Gray background for letters not in target

### Event Handler

**Responsibilities**: Manage user interactions and coordinate between layers

**Key Events**:
- Input field: Validate characters, enable/disable submit button
- Submit button / Enter key: Submit guess, update UI
- Play again button: Reset game, clear UI

## Data Models

### Guess Object

Each guess submitted by the player is stored as an object containing the word and detailed feedback for each letter:

```
{
  word: "pikachu",
  feedback: [
    { letter: "p", status: "correct" },      // Letter is in correct position
    { letter: "i", status: "wrong-position" }, // Letter exists in target but wrong position
    { letter: "k", status: "not-in-word" },   // Letter does not exist in target
    { letter: "a", status: "correct" },       // Letter is in correct position
    { letter: "c", status: "wrong-position" }, // Letter exists in target but wrong position
    { letter: "h", status: "not-in-word" },   // Letter does not exist in target
    { letter: "u", status: "correct" }        // Letter is in correct position
  ]
}
```

**Explanation**: The feedback array has one object per letter in the guess. Each object contains:
- `letter`: The actual letter from the guess
- `status`: One of three values:
  - `"correct"`: Letter is in the target Pokemon name at this exact position
  - `"wrong-position"`: Letter exists in the target Pokemon name but at a different position
  - `"not-in-word"`: Letter does not exist anywhere in the target Pokemon name

This structure allows the UI to render each letter with the appropriate visual feedback (green, yellow, or gray).

### Game State Object
```
{
  targetPokemon: "pikachu",
  guesses: [Guess, Guess, ...],
  gameWon: false,
  guessCount: 0,
  previousGuesses: Set of lowercase Pokemon names
}
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Five-Letter Pokemon Filtering

*For any* list of Pokemon names fetched from PokeAPI, all returned names after filtering should be exactly 5 letters long.

**Validates: Requirements 1.2**

### Property 2: Random Pokemon Selection

*For any* filtered list of 5-letter Pokemon names, running the game multiple times should select different Pokemon names (not always the same one).

**Validates: Requirements 1.3**

### Property 3: Alphabetic Input Only

*For any* input string containing non-alphabetic characters, the input field should reject or filter out non-alphabetic characters, accepting only letters.

**Validates: Requirements 2.1**

### Property 4: Five-Letter Guess Validation

*For any* submitted guess, if the guess is not exactly 5 letters, the system should reject it and display an error message.

**Validates: Requirements 2.3, 2.4**

### Property 5: Input Field Cleared After Submission

*For any* valid guess submission, the input field should be empty after the guess is processed.

**Validates: Requirements 2.5**

### Property 6: Correct Position Feedback

*For any* guess and target Pokemon name, letters in the correct position should be marked with "correct" status.

**Validates: Requirements 3.1, 3.2**

### Property 7: Wrong Position Feedback

*For any* guess and target Pokemon name, letters that exist in the target but are in the wrong position should be marked with "wrong-position" status.

**Validates: Requirements 3.1, 3.3**

### Property 8: Not-In-Word Feedback

*For any* guess and target Pokemon name, letters that do not exist in the target should be marked with "not-in-word" status.

**Validates: Requirements 3.1, 3.4**

### Property 9: Guess History Accumulation

*For any* sequence of valid guesses submitted, the guess history should contain all submitted guesses in chronological order.

**Validates: Requirements 4.1, 4.3**

### Property 10: Guess Counter Accuracy

*For any* sequence of valid guesses submitted, the guess counter should equal the total number of guesses made.

**Validates: Requirements 4.4**

### Property 11: Duplicate Guess Prevention

*For any* guess that was previously submitted, attempting to submit it again should be rejected with an error message.

**Validates: Requirements 6.2, 6.3**

### Property 12: Win Detection

*For any* guess that exactly matches the target Pokemon name, the game should detect the win condition and display the success modal.

**Validates: Requirements 5.1, 5.2**

### Property 13: Win Modal Content

*For any* win condition, the success modal should display the correct target Pokemon name and the accurate guess count.

**Validates: Requirements 5.3, 5.4**

### Property 14: Game State Reset

*For any* game reset (play again), the game should select a new random Pokemon and clear all previous guesses from state and UI.

**Validates: Requirements 6.4, 6.5**

## Error Handling

**Invalid Guess Length**: Display error message "Guess must be exactly 5 letters" and prevent submission

**Duplicate Guess**: Display error message "You already guessed [Pokemon name]" and prevent submission

**API Fetch Failure**: Display error message "Failed to load Pokemon data. Please refresh the page." and disable game

**Empty Input Submission**: Display error message "Please enter a 5-letter Pokemon name" and prevent submission

## Testing Strategy

### Unit Tests

Unit tests verify specific examples, edge cases, and error conditions:

- Test that input field rejects non-alphabetic characters
- Test that submit button is disabled with less than 5 characters
- Test that error messages display for invalid guesses
- Test that guess history renders correctly
- Test that success modal displays on win
- Test that play again button resets the game
- Test that duplicate guess error displays

### Property-Based Tests

Property-based tests verify universal properties across many generated inputs:

- **Property 1**: Generate random Pokemon lists and verify all filtered names are 5 letters
- **Property 2**: Run game initialization multiple times and verify different Pokemon are selected
- **Property 3**: Generate random strings with various characters and verify only letters are accepted
- **Property 4**: Generate guesses of various lengths and verify only 5-letter guesses are accepted
- **Property 5**: Submit valid guesses and verify input field is cleared
- **Property 6-8**: Generate random guesses and targets, verify feedback is correct for each letter
- **Property 9**: Submit multiple guesses and verify they appear in history in order
- **Property 10**: Submit multiple guesses and verify counter matches guess count
- **Property 11**: Submit duplicate guesses and verify second submission is rejected
- **Property 12-13**: Submit correct guess and verify win modal displays with correct content
- **Property 14**: Reset game and verify new Pokemon is selected and history is cleared

**Configuration**:
- Minimum 100 iterations per property test
- Each test tagged with property number and requirements reference
- Tag format: `Feature: wordlemon, Property N: [Property Title]`
