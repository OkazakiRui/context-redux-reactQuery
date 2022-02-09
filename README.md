# 各レンダリング回数

## ClassicalFetchA

1. レンダリングされた時
2. マウントされた時に useEffect で isLoading の state を変更している
3. データを取得し、setTasks で state を変更していて、カスタムフックで state を参照しているから
4. 一連の処理が終わった際に isLoading の state を変更している
