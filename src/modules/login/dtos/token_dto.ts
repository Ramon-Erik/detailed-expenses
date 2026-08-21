export interface RefreshResponse {
  user: {
    id: string
    email: string
    phone: null
    name: string
    role: null
    aud: string
    email_confirmed_at: string
    phone_confirmed_at: string
    created_at: string
    updated_at: string
    last_sign_in_at: string
  }
  access_token: string
  refresh_token: string
  expires_at: number
  expires_in: number
  token_type: string
}
