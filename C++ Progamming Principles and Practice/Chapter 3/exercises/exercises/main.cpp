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

	keep_window_open();
}