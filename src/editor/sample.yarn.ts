const placeholderYarn = `
// testing a comment
<<if visited("Sally") is false>>
    Player: Hey, Sally. #line:794945
    Sally: Oh! Hi. #line:2dc39b
    Sally: You snuck up on me. #line:34de2f
    Sally: Don't do that. #line:dcc2bc
<<else>>
    Player: Hey. #line:a8e70c
    Sally: Hi. #line:305cde
<<endif>>

<<if not visited("Sally.Watch")>>
    [[Anything exciting happen on your watch?|Sally.Watch]] #line:5d7a7c
<<endif>>

<<if $sally_warning and not visited("Sally.Sorry")>>
    [[Sorry about the console.|Sally.Sorry]] #line:0a7e39
<<endif>>
[[See you later.|Sally.Exit]] #line:0facf7
`

export default placeholderYarn
