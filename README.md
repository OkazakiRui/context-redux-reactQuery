# 各レンダリング回数

## ClassicalFetch

### A 4 回 [更新するたび fetch される]

1. レンダリングされた時
2. マウントされた時に useEffect で isLoading の state を変更している
3. データを取得し、setTasks で state を変更していて、カスタムフックで state を参照しているから
4. 一連の処理が終わった際に isLoading の state を変更している

### B 1 回

1. レンダリングされた時に context から data を参照している

## ReactQuery

### A 2 回 [初回 fetch → データは cache で保つ。staletime の期限が切れると再 fetch]

1. レンダリングされた時
2. fetch の処理が終わった時

### B 1 回

1. レンダリングされた時に cache から data を参照している
