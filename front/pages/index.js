/*
    Next.js에서 페이지는 pages 디렉토리 내의 .js, .jsx, .ts 또는 .tsx 파일에서 
    export한 React Component이다. 

    pages 디렉토리에 추가된 각 페이지는 파일 이름에 따라 경로와 연결된다.

    예를 들어 pages/about.js를 생성해서 React component를 export 할 경우
    localhost:3000/about으로 접근 할 수 있다.

    이러한 화면 전환은 'next/link'의 Link를 import 하여 활성화 할 수 있다.
*/
import Link from 'next/link';

export default function main() {
    return (
        <div>
            <h2>메인 화면</h2>
            <Link href='/introduce'>
                <a>Introduce Me</a>
            </Link>
        </div>
    )
}

