#include "std_lib_facilities.h"

int main() {
	cout << "Please enter a integer value.";
	int n;
	cin >> n;
	double m;
	m = n;
	cout << "n ==" << n
		<< "\nn+1 == " << n + 1
		<< "\nthree times n == " << 3 * n
		<< "\ntwice n == " << n + n
		<< "\nn squared == " << n*n
		<< "\nhalf of n == " << n / 2
		<< "\nsquare root of n == " << sqrt(m)
		<< "\nremainder of n/2 == " << n % 2
		<< '\n'; // another name for newline ("end of line") in output

	cout << "Please enter your first and second name\n";
	string first;
	string second;
	cin >> first >> second; // read two strings
	string name = first + ' ' + second; // concatenate strings
	cout << "Hello, " << name << '\n';

	cout << "Please enter two names \n";
	string nameOne;
	string nameTwo;
	cin >> nameOne >> nameTwo; // read two strings
	if (nameOne == nameTwo) cout << "that's the same name twice \n";
	if (nameOne < nameTwo)
		cout << nameOne << " is alphabetically before " << nameTwo << '\n';
	if (nameOne > nameTwo)
		cout << nameOne << " is alphabetically after " << nameTwo << '\n';
}