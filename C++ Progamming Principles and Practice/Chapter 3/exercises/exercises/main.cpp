#include "std_lib_facilities.h"

int main() {
	// Exercise 2
	cout << "Enter a number of miles to convert to kilometers.\n";
	int miles;
	cin >> miles;
	cout << miles << " miles is equal to " << miles * 1.609 << " kilometers.\n";

	// Exercise 4
	cout << "Please enter two whole numbers.\n";
	int val1;
	int val2;
	cin >> val1 >> val2;
	if (val1 < val2) {
		cout << val1 << " is less than " << val2 << ".\n";
	}
	else {
		cout << val1 << " is greater than " << val2 << ".\n";
	}

	cout << val1 << " + " << val2 << " = " << val1 + val2 << ".\n";
	cout << val1 << " - " << val2 << " = " << val1 - val2 << ".\n";
	cout << val1 << " / " << val2 << " = " << val1 / val2 << ".\n";
	cout << val1 << " * " << val2 << " = " << val1 * val2 << ".\n";

	// Exercise 5
	cout << "Please enter two real numbers.\n";
	double double1;
	double double2;
	cin >> double1 >> double2;
	if (double1 < double2) {
		cout << double1 << " is less than " << double2 << ".\n";
	}
	else {
		cout << double1 << " is greater than " << double2 << ".\n";
	}

	cout << double1 << " + " << double2 << " = " << double1 + double2 << ".\n";
	cout << double1 << " - " << double2 << " = " << double1 - double2 << ".\n";
	cout << double1 << " / " << double2 << " = " << double1 / double2 << ".\n";
	cout << double1 << " * " << double2 << " = " << double1 * double2 << ".\n";

	// Exercise 6 ( refuse to use complicated syntax since that isn't in the book yet)
	cout << "Enter 3 whole numbers.\n";
	cin >> val1;
	cin >> val2;
	int val3;
	cin >> val3;
	if (val1 <= val2) {
		if (val1 <= val3) {
			if (val2 <= val3) {
				cout << val1 << ", " << val2 << ", " << val3 << ".\n";
			}
			else {
				cout << val1 << ", " << val3 << ", " << val2 << ".\n";
			}
		}
		else {
			cout << val3 << ", " << val1 << ", " << val2 << ".\n";
		}
	}
	else {
		if (val2 <= val3) {
			if (val3 <= val1) {
				cout << val2 << ", " << val3 << ", " << val1 << ".\n";
			}
			else {
				cout << val2 << ", " << val1 << ", " << val3 << ".\n";
			}
		}
		else {
			cout << val3 << ", " << val2 << ", " << val1 << ".\n";
		}
	}

	// Exercise 7
	cout << "Enter 3 authors last names.\n";
	string author1;
	string author2;
	string author3;
	cin >> author1;
	cin >> author2;
	cin >> author3;
	if (author1 <= author2) {
		if (author1 <= author3) {
			if (author2 <= author3) {
				cout << author1 << ", " << author2 << ", " << author3 << ".\n";
			}
			else {
				cout << author1 << ", " << author3 << ", " << author2 << ".\n";
			}
		}
		else {
			cout << author3 << ", " << author1 << ", " << author2 << ".\n";
		}
	}
	else {
		if (author2 <= author3) {
			if (author3 <= author1) {
				cout << author2 << ", " << author3 << ", " << author1 << ".\n";
			}
			else {
				cout << author2 << ", " << author1 << ", " << author3 << ".\n";
			}
		}
		else {
			cout << author3 << ", " << author2 << ", " << author1 << ".\n";
		}
	}

	// Exercise 8
	cout << "Enter an integer please.\n";
	cin >> val1;
	cout << "The number " << val1;
	if (val1 % 2 == 0) {
		cout << " is an even number.\n";
	}
	else {
		cout << " is an odd number.\n";
	}

	// Exercise 9
	cout << "Enter a number between 0 and 4 (inclusive) and I will spell it out for you.\n";
	cin >> val1;
	if (val1 == 0) {
		cout << "Zero.\n";
	}
	else if (val1 == 1) {
		cout << "One.\n";
	}
	else if (val1 == 2) {
		cout << "Two.\n";
	}
	else if (val1 == 3) {
		cout << "Three.\n";
	}
	else if (val1 == 4) {
		cout << "Four.\n";
	}
	else {
		cout << "Not a number I know, sorry.\n";
	}

	// Excersize 10
	cout << "Enter a math operator followed by two integers.\n";
	string operation;
	cin >> operation >> val1 >> val2;
	if (operation == "+") {
		cout << val1 << " + " << val2 << " = " << val1 + val2;
	}
	else if (operation == "-") {
		cout << val1 << " - " << val2 << " = " << val1 - val2;
	}
	else if (operation == "*") {
		cout << val1 << " * " << val2 << " = " << val1 * val2;
	}
	else if (operation == "/") {
		cout << val1 << " / " << val2 << " = " << val1 / val2;
	}
	cout << ".\n";

	// Exercise 11
	cout << "How many pennies do you have?\n";
	cin >> val1;
	cout << "How many nickels do you have?\n";
	cin >> val2;
	cout << "How many dimes do you have?\n";
	cin >> val3;
	cout << "How many quarters do you have?\n";
	int val4;
	cin >> val4;
	cout << "How many half dollars do you have?\n";
	int val5;
	cin >> val5;

	cout << "You have " << val1 << " pennies.\n";
	cout << "You have " << val2 << " nickels.\n";
	cout << "You have " << val3 << " dimes.\n";
	cout << "You have " << val4 << " quarters.\n";
	cout << "You have " << val5 << " half dollars.\n";
	int sum = val1 + val2 * 5 + val3 * 10 + val4 * 25 + val5 * 50;
	cout << "The value of all of your coins is $" << floor(sum / 100) << "." << sum % 100 <<".\n";

	keep_window_open();
}