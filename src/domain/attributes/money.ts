import {CurrencyEnum} from "@domain/enums/currency.enum";

export class Money {
    private constructor(
        private readonly amount: number,
        private readonly currency: CurrencyEnum
    ) {}

    public static create(amount: number, currency: CurrencyEnum): Money {
        if (amount < 0) {
            throw new Error("Amount cannot be negative");
        } else if (amount > 99999999.99) {
            throw new Error("Amount exceeds the maximum allowed value");
        }

        return new Money(amount, currency);
    }

    getAmount(): number {
        return this.amount;
    }

    getCurrency(): string {
        return this.currency;
    }

    add(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Error("Cannot add amounts with different currencies");
        }
        return new Money(this.amount + other.amount, this.currency);
    }

    subtract(other: Money): Money {
        if (this.currency !== other.currency) {
            throw new Error("Cannot subtract amounts with different currencies");
        }
        return new Money(this.amount - other.amount, this.currency);
    }
}