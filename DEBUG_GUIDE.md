# 🔧 Auth API 디버깅 가이드

## 현재 상황

- 회원가입 시 `400 Bad Request` 에러 발생
- 에러 메시지: "id must be a string"

## 🧪 디버깅 방법

### 1. 개발 서버 실행

```bash
npm run dev
```

### 2. 브라우저 개발자 도구 열기

- F12 또는 우클릭 → 검사
- **Console** 탭 확인
- **Network** 탭에서 API 요청 확인

### 3. 회원가입 테스트

1. `/auth/register` 접속
2. 이메일 입력 → 다음
3. 4자리 인증번호 입력 → 다음
4. 비밀번호 입력 → 완료

### 4. 로그 확인

콘솔에서 다음 로그들을 확인:

- `회원가입 시도:` - 요청 데이터
- `회원가입 요청 데이터:` - API 클라이언트 로그
- `회원가입 실패:` - 에러 정보
- `에러 세부사항:` - 백엔드 응답

## 🔄 현재 시도 중인 해결책

### 1. UUID ID 추가

```typescript
const userId = crypto.randomUUID();
await signUp.mutateAsync({
  id: userId, // UUID 추가
  email,
  password,
  name: extractedName,
});
```

### 2. ID 없이 재시도

ID 에러 시 자동으로 ID 없이 재시도:

```typescript
// ID 없이 재시도
await signUp.mutateAsync({
  email,
  password,
  name: extractedName,
});
```

## 🔍 추가 확인사항

### API 엔드포인트 확인

- 정확한 URL: `POST http://52.231.201.28:4000/auth/sign/up`
- Content-Type: `application/json`

### 가능한 원인들

1. 백엔드가 `id` 필드를 필수로 요구
2. 다른 필드명 사용 (예: `userId`, `identifier`)
3. 이메일 인증 과정에서 받은 토큰 필요
4. API 문서와 실제 구현 차이

## 📋 테스트 결과 확인

브라우저 콘솔에서 다음 정보들을 확인해주세요:

1. **요청 데이터**: 실제 전송되는 데이터
2. **응답 에러**: 백엔드에서 반환하는 정확한 에러 메시지
3. **HTTP 상태 코드**: 400, 401, 422 등
4. **네트워크 탭**: 실제 HTTP 요청/응답 확인

이 정보들을 확인한 후 정확한 해결책을 제시할 수 있습니다!
