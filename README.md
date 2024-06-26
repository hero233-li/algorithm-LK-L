刷力扣算法题记录

⼆、开发规范

开发中注意事项

1）开发新功能时，确保从项⽬仓库拉取 最新主分⽀ 的代码。

2）每个功能都要新建⾃⼰的分⽀进⾏开发，千万不要直接修改主分⽀的代码！注意分⽀名称要使⽤英⽂、⾜够语义化，不要和其他⼈的混淆。

3）开发时，尽量复⽤现有的功能、模块、类、⽅法、对象代码。有现成的代码，就不要再重复编写。如⽆法复⽤，可 以适当通过注释说明。

4）开发时，遵循团队内部的研发规范，尽量参考现有项⽬代码的写法，尤其是不要使⽤和原项⽬不⼀致的格式、命名、写法，避免特⽴独⾏。

5）开发过程中，有任何不明确的地⽅，不要凭空猜测，及时去联系项⽬的其他成员或负责⼈确认。

6）开发过程中，每隔⼀段时间（⽐如 1 - 3 天）可以使⽤ git pull 同步⼀下最新的主分⽀代码，防⽌合并代码冲突。

7）开发过程中，注意整体时间进度的把控，先完成再完美，有⻛险时及时反馈。

8）开发时，需要格外注意对异常情况的捕获和处理。

9）每个分⽀尽量保证纯净，尽量减少每次开发和提交时改动的代码量。建议每次开分⽀只改⼀个功能、Bug 或模块， 不要把多个不相关的功能写在⼀起，并且⾮必要不修改。

10）完成部分功能开发后，⼀定要⾃测！⾃测时，可以 Mock 假数据。注意⼀定不要在线上测试、⼀定不要影响线上数据！

三、代码提交规范

1）只有通过测试和产品验收的代码，才能够发起合并到主分⽀的 PR 请求。在这之前可以提交到⾃⼰的分⽀。

2）发起合并到主分⽀的 PR 前，⼀定要完整阅读 3 遍⾃⼰的代码，避免不规范的写法和⽆意义的改动。

3）每次合并尽量只专注于⼀个功能或改动，避免多个功能耦合在⼀起合并，提⾼审查效率并降低改动⻛险。

4）每次提交时，需要在 commit 信息中提供代码改动说明，还可以通过关联需求⽂档、测试⽤例、⽅案⽂档、效果截图等⽅式进⾏补充说明commit 信息可参考《约定式提交》⽂档，但不做强制要求。

5）除⾮特殊情况，否则所有的代码必须经过⾄少⼀位项⽬负责⼈ Code Review 审核通过后，才能合并；并且只有合并到主分⽀的代码才允许发布上线。

