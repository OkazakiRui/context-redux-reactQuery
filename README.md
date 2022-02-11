# 使用しているrestapi
https://github.com/OkazakiRui/django_todo_restapi

# 各レンダリング回数

## ClassicalFetch

### A 4 回 [更新するたび fetch される]

1. レンダリングされた時
2. マウントされた時に useEffect で isLoading の state を変更している
3. データを取得し、setTasks で state を変更していて、カスタムフックで state を参照しているから
4. 一連の処理が終わった際に isLoading の state を変更している

### B 1 回

1. レンダリングされた時に context から data を参照している

## Context

### コンポーネント A / コンポーネント B

1. レンダリングされた時
2. 同じプロバイダーの中で state が変更された時(関係なくても再レンダリングされる)

### useContext の考察

1. state ごとにプロバイダーを作成する ( [tasks, setTasks] を区別しない為、値を引き出す用と更新用で分ける必要がある )
2. 大規模になるにつれ、多くの複雑なプロバイダーを実装する必要があるため、リファクタリングなどはしにくい、DX が低くなる

## ReactQuery

### A 2 回 [初回 fetch → データは cache で保つ。staletime の期限が切れると再 fetch]

1. レンダリングされた時
2. fetch の処理が終わった時

### B 1 回

1. レンダリングされた時に cache から data を参照している

## ReduxToolKit

### 考察

1. useContext とは違い、default でレンダリングの最適化がされている。
