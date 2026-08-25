export const formRules = {
  required(value: unknown): boolean | string {
    if (typeof value === "string") {
      return value.trim().length > 0 || "O campo é obrigatório";
    }

    if (value instanceof File) {
      return true;
    }

    if (Array.isArray(value)) {
      return value.length > 0 || "O campo é obrigatório";
    }

    if (value == null) {
      return "O campo é obrigatório";
    }

    return true;
  },

  validEmail: function (value: string): boolean | string {
    const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      value
    );
    return isValidEmail || "O e-mail deve ser válido";
  },

  maxLength: function (
    maxLength: number,
    errorMessage?: string
  ): (value: string) => boolean | string {
    return function (str: string) {
      if (!str) {
        return true;
      }
      const isValid = str.length <= maxLength;
      return (
        isValid ||
        (errorMessage ?? "Insira no máximo $maxLength caracteres").replace(
          "$maxLength",
          `${maxLength}`
        )
      );
    };
  },

  minLength: function (
    minLength: number,
    errorMessage?: string
  ): (value: string) => boolean | string {
    return function (str: string) {
      if (!str) {
        return true;
      }
      const isValid = str.length >= minLength;
      return (
        isValid ||
        (errorMessage ?? "Insira no mínimo $minLength caracteres").replace(
          "$minLength",
          `${minLength}`
        )
      );
    };
  },

  validCPF(value: string): boolean | string {
    if (!value) return "CPF é obrigatório";

    const numeric = value.replace(/\D/g, "");

    // Verifica se tem 11 dígitos
    if (!/^\d{11}$/.test(numeric)) {
      return "CPF deve conter 11 dígitos";
    }

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(numeric)) {
      return "CPF inválido";
    }

    // Validação do dígito verificador
    let sum = 0;
    let remainder;

    // Primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(numeric.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(numeric.substring(9, 10))) {
      return "CPF inválido";
    }

    // Segundo dígito verificador
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(numeric.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(numeric.substring(10, 11))) {
      return "CPF inválido";
    }

    return true;
  },

  validPhoneNumber: function (value: string): boolean | string {
    return (
      (!!value && /^\(\d{2}\) \d{5}-\d{4}$/.test(value)) ||
      "Insira um número válido"
    );
  },

  validCNPJ: function (value: string): boolean | string {
    if (!value) return "Campo CNPJ é obrigatório.";
    const numericCNPJ = value.replace(/\D+/g, "");
    if (!/^\d{14}$/.test(numericCNPJ))
      return "CNPJ inválido. Deve conter 14 dígitos.";
    return true;
  },

  matches: function (
    value: string,
    errorMessage?: string
  ): (value: string) => boolean | string {
    return function (str: string) {
      if (!str) {
        return true;
      }
      const isValid = str === value;
      return isValid || (errorMessage ?? "As senhas não correspondem");
    };
  },

  validTelefone: function (value: string): boolean | string {
    if (!value) return "Campo telefone é obrigatório.";
    const numericTelefone = value.replace(/\D+/g, "");
    if (!/^\d{11}$/.test(numericTelefone))
      return "Telefone inválido. Deve conter 11 dígitos.";
    return true;
  },

  validCEP: function (
    errorMessage?: string
  ): (value: string) => boolean | string {
    return function (str: string) {
      if (!str) {
        return true;
      }
      const validCharacters = str.replace(/-/g, "");
      const isValid = validCharacters.length <= 8;
      return isValid || (errorMessage ?? "Insira um CEP válido");
    };
  },

  validTotalValue: function (
    errorMessage?: string
  ): (value: string) => boolean | string {
    return function (str: string) {
      if (!str) {
        return true;
      }
      const validCharacters = str.replace(/[,.]/g, "");
      const isValid = validCharacters.length <= 12;
      return isValid || (errorMessage ?? "Insira no máximo 12 caracteres");
    };
  },

  validDecimal: function (value: string): boolean | string {
    if (!/^\d+(\.\d{1,2})?$/.test(value))
      return "Valor inválido. Insira no máximo 2 casas decimais.";

    return true;
  },

  validMoney(value: string): boolean | string {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "Informe um valor válido";
    return true;
  },
};
